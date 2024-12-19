{ config, pkgs, ... }:
{
	networking.hostName = "vip";
	networking.networkmanager.enable = true;
	networking.firewall.enable = true;

	#Security
	security.polkit.enable = true;
	security.rtkit.enable = true;
	services.gvfs.enable = true;

	#SUID 
	programs.gnupg.agent = {
		enable = true;
		enableSSHSupport = true;
	};

	#ssh
	services.openssh.enable = true;
}

