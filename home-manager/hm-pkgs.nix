{ inputs, pkgs, ...}:
{
  home.packages = with pkgs; [
    brave
    deluge
    miru
    vlc
    mpv
    zathura
    libreoffice-fresh
    calibre
    hypnotix
    vscode
    retroarchFull

    ark
    imv
    rofi-wayland
    networkmanagerapplet
    
    swww
    pywal16
    swaylock-fancy
    wlogout

    neovim
    ranger
    yazi
    tmux
    nitch
    neofetch
    starship
    btop
   
    spicetify-cli
    axel
    yt-dlp
    ffmpeg
    grim
    slurp
    ncdu
    tldr
    zoxide
    eza
    fzf
    duf
    killall
    toipe
    nix-prefetch-git
    android-tools
    
    cava
    jp2a
    globe-cli
    pipes-rs
    cmatrix
    tty-clock

    blender
    gimp
    inkscape
    libsForQt5.kdenlive
    obs-studio
    droidcam
   ]; 
  }
