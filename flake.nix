{
  description = "My first flake!";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-24.11";
    home-manager = {
      url = "github:nix-community/home-manager/release-24.05";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    stylix.url = "github:danth/stylix";
    spicetify-nix = {
      url = "github:Gerg-L/spicetify-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };    
    # nixpkgs.url = "nixpkgs/nixos-unstable";

    # nixpkgs.url = "nixpkgs/{BRANCH-NAME}";
  };

  outputs = { self, nixpkgs, home-manager, stylix, ... }@inputs :
    let
      lib = nixpkgs.lib;
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      nixosConfigurations = {
        vip = lib.nixosSystem {
          specialArgs = {
            inherit inputs;
            inherit system;
            };
          modules = [ ./configuration.nix
            ];
      };
    };
    homeConfigurations = {
      vip = home-manager.lib.homeManagerConfiguration {
         pkgs = import nixpkgs {
           inherit system;
         };
         extraSpecialArgs = {
           inherit system;
           inherit inputs;
         };
        modules = [ ./home.nix
          stylix.homeManagerModules.stylix
          ];
      };
    };
    };
}
