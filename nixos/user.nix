{ config, pkgs, ... }:
{
  users.users.vip = {
		isNormalUser = true;
		description = "VIP";
		extraGroups = [ "networkmanager" "wheel" ];
		packages = with pkgs; [];
	};
}
