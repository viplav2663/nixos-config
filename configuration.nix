{ config, pkgs, ... }:

{
  imports =
    [ # Include the results of the hardware scan.
      ./nixos/hardware-configuration.nix
      ./nixos/hyprland.nix
      ./nixos/boot.nix
      ./nixos/networking.nix
      ./nixos/audio.nix
      ./nixos/services.nix
      ./nixos/user.nix
      ./nixos/pkgs.nix
      ./nixos/fonts.nix
     # <home-manager/nixos>
    ];

 
  nix.settings.experimental-features = [ "nix-command" "flakes"];

  # Set your time zone.
  time.timeZone = "Asia/Kolkata";

  # Select internationalisation properties.
  i18n.defaultLocale = "en_IN";

  i18n.extraLocaleSettings = {
    LC_ADDRESS = "en_IN";
    LC_IDENTIFICATION = "en_IN";
    LC_MEASUREMENT = "en_IN";
    LC_MONETARY = "en_IN";
    LC_NAME = "en_IN";
    LC_NUMERIC = "en_IN";
    LC_PAPER = "en_IN";
    LC_TELEPHONE = "en_IN";
    LC_TIME = "en_IN";
  };

  system.stateVersion = "24.11"; # Did you read the comment?
  #home.stateVersion = "24.05";
  #home.enableNixpkgsReleaseCheck = false;
}
