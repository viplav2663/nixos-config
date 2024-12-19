{ config, pkgs, ... }:
{
	services.xserver = {
		xkb.layout = "us";
		xkb.variant = "";
		enable = true;
	};
	
	services.displayManager.sddm.enable = true;
	services.displayManager.sddm.settings = {
  Theme = {
    Current = "sddm-sugar-candy";
    ThemeDir = "/sddmt";
    };
	};

	#virtualisation
	virtualisation.libvirtd.enable = true;

	programs.dconf.enable = true;

  services.wordpress.sites."localhost" = {};
}

