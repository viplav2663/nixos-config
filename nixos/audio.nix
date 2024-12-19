{ config, pkgs, ... }:
{
	#sound.enable = true;
	services.pipewire = {
		enable = true;
		alsa.enable = true;
		alsa.support32Bit = true;
		pulse.enable = true;
		jack.enable = true;
	};

	hardware = {
		bluetooth.enable = true;
		bluetooth.powerOnBoot = true;
	};

	services.blueman.enable = true;
}
