{ pkgs, ... }: 

{
#  stylix.image =./0254.jpg;
 # stylix.polarity = "dark";

#stylix.base16Scheme = "${pkgs.base16-schemes}/share/themes/apprentice.yaml";
  
  # OR
  
 stylix.base16Scheme = {
    base00 = "#0c0c11"; #"282828";
    base01 = "#535847";
    base02 = "#c74f2c";#"#504945";
    base03 = "#5b8774";#"#665c54";
    base04 = "#d6a053";#"#bdae93";
    base05 = "#ebdbb2";#"#d5c4a1";
    base06 = "#259e9d";#"#ebdbb2";
    base07 = "#c2c2c3";
    base08 = "#fb4934";
    base09 = "#535847";
    base0A = "#c74f2c";
    base0B = "#5b8774";
    base0C = "#d6a053";
    base0D = "#ebdbb2";
    base0E = "#259e9d";
    base0F = "#d65d0e";
  };
  
  # Don't forget to apply wallpaper
  
  #stylix.image = ./my-cool-wallpaper.png;

}
