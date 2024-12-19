{ config, pkgs, ... }:
{
	#boot.loader.systemd-boot.enable = true;
	boot.loader.grub.enable = true;
	boot.loader.grub.device = "nodev";
	boot.loader.grub.efiSupport = true;
	boot.loader.grub.useOSProber = true;
	boot.loader.efi.efiSysMountPoint = "/boot";
	boot.loader.efi.canTouchEfiVariables = true;
	#boot.kernelParams = [
	#	"systemd.mask=systemd-vconsole-setup.service"
	#	"systemd.mask=dev-tpmrm0.device"
	#];
}

