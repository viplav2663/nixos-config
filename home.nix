{ inputs, config, pkgs, ... }:

{
 nixpkgs =  {
 config  = {
   allowUnfree = true;
   allowUnfreePredicate = _: true;
  };
};

  # Home Manager needs a bit of information about you and the paths it should
  # manage.
  home.username = "vip";
  home.homeDirectory = "/home/vip";
  
  programs.git = {
    enable = true;
    userName = "viplav2663";
    userEmail = "viplav.msc@gmail.com";
    extraConfig = {
      init.defaultBranch = "main";
    };
  };

  gtk = {
    enable = true;

    theme = {
      name = "gruvbox-dark";
      package = pkgs.gruvbox-dark-gtk;
    }; 

    iconTheme = {
      name = "Paper";
      package = pkgs.paper-icon-theme;
       #name = "Gruvbox-dark-icon";
       #package = pkgs.gruvbox-dark-icons-gtk;
    };

    cursorTheme = {
      name = "Bibata-Modern-Ice";
      package = pkgs.bibata-cursors;
    };
  };

  qt = {
    enable = true;
    platformTheme.name = "gtk";
    style.name = "adwaita-dark";
    style.package = pkgs.adwaita-qt6;
  };


  home.stateVersion = "24.05"; # Please read the comment before changing.
  home.enableNixpkgsReleaseCheck = false;
 # home.file = {
 #  # "~/.config/hypr/hyprland.conf".source = ./hyprland.conf;
 # };

 # home.sessionVariables = {
 #    EDITOR = "nixvim";
 # };
  imports = [ ./home-manager/waybar/default.nix
  	      #./home-manager/nixvim.nix
              ./home-manager/stylix.nix
              ./home-manager/spicetify.nix
              ./home-manager/hm-pkgs.nix 
             ];
  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
 }
