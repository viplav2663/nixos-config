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
  
 # config = { 
  #  allowUnfree = true;
   # allowUnfreePredicate = _: true;
  # }; 

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
  # This value determines the Home Manager release that your configuration is
  # compatible with. This helps avoid breakage when a new Home Manager release
  # introduces backwards incompatible changes.
  #
  # You should not change this value, even if you update Home Manager. If you do
  # want to update the value, then make sure to first check the Home Manager
  # release notes.
 # imports = [ ./spicetify.nix ];

  home.stateVersion = "24.05"; # Please read the comment before changing.

  # The home.packages option allows you to install Nix packages into your
  # environment.
  home.packages = with pkgs; [
    dconf
    firewalld
    starship
    jp2a
    blender
    #qbittorrent
    bluetuith
    android-tools
    scrcpy
    gimp
    hypnotix
    catnip
    nix-prefetch-git
    pfetch
    pywal
    vlc
    brave
    zathura
    swww
    networkmanagerapplet
    cava
    ranger
    eww
    rofi-wayland
    rofi-power-menu
    unzip
    ark
    imv
    libreoffice-fresh
    tty-clock
    cmatrix
    pipes-rs
    calibre
    grim
    slurp
    neofetch
    nitch
    btop
    neovim
    globe-cli
    retroarchFull
    vscode
    python3Full
    obs-studio
    droidcam
    obs-studio-plugins.droidcam-obs
    gparted
    killall
    git
    mpv
    yt-dlp
    axel
    ffmpeg
    ncdu
    tldr
    toipe
    thefuck
    zoxide
    eza
    fzf
    duf
    neomutt
    swaylock-fancy
    mapscii
    qalculate-gtk
    waybar
  ];
  
  # Home Manager is pretty good at managing dotfiles. The primary way to manage
  # plain files is through 'home.file'.
  home.file = {
   # "~/.config/hypr/hyprland.conf".source = ./hyprland.conf;
    # # Building this configuration will create a copy of 'dotfiles/screenrc' in
    # # the Nix store. Activating the configuration will then make '~/.screenrc' a
    # # symlink to the Nix store copy.
    # ".screenrc".source = dotfiles/screenrc;

    # # You can also set the file content immediately.
    # ".gradle/gradle.properties".text = ''
    #   org.gradle.console=verbose
    #   org.gradle.daemon.idletimeout=3600000
    # '';
  };

  # Home Manager can also manage your environment variables through
  # 'home.sessionVariables'. If you don't want to manage your shell through Home
  # Manager then you have to manually source 'hm-session-vars.sh' located at
  # either
  #
  #  ~/.nix-profile/etc/profile.d/hm-session-vars.sh
  #
  # or
  #
  #  /etc/profiles/per-user/vip/etc/profile.d/hm-session-vars.sh
  #
  home.sessionVariables = {
    # EDITOR = "emacs";
  };

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
 }
