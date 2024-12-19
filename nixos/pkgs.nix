{ config, pkgs, ... }:
{ 
	#Unfree packages
	nixpkgs.config.allowUnfree = true;
	nixpkgs.config.allowUnfreePredicate = _: true;
        nixpkgs.config.allowbroken = true;
	programs.fish.enable = true;
	users.defaultUserShell = pkgs.fish;
  	
  environment.systemPackages = with pkgs; [
		home-manager
		vim
		kitty
		gcc
		clang
		wget
		git
		python313Full
   

		pcmanfm
		gvfs
		udiskie
		gparted
		lxqt.lxqt-policykit

		gtk2
		gtk3
		gtk4

		libsForQt5.qt5.qtquickcontrols2
		libsForQt5.qt5.qtgraphicaleffects

		pavucontrol
		pamixer
		pipewire
		bluez
		bluez-tools
		blueman

		brightnessctl

		sddm
		sddm-kcm
    #(callPackage ./sugar-candy.nix{}).sddm-sugar-candy-theme

    gnome-network-displays
    wlroots
		xwayland
		xdg-utils
		xdg-desktop-portal-hyprland
		xorg.xauth
	];
}











