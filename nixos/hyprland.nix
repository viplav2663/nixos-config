{ config, pkgs, ... }:
{
	programs.hyprland = {
		enable = true;
		xwayland.enable = true;
	};

	environment.sessionVariables = {
		WLR_NO_HARDWARE_CURSORS = "1";
		NIXOS_OZON_WL = "1";
	};

	hardware = {
		graphics.enable =true;
	};

	xdg.portal.enable = true;
	xdg.portal.extraPortals = [ pkgs.xdg-desktop-portal-gtk ];
}
