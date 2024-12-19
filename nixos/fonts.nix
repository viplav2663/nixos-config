{pkgs, lib, ...}: {
	fonts = {
		fontconfig = {
			enable =true;
			defaultFonts.monospace = [ "Meslo LG M Regular Nere Font Complete Mono" ];
		};
		};
	fonts.packages = with pkgs; [( nerdfonts.override { fonts = [ "Meslo" "JetBrainsMono" "Iosevka" ]; })];
}
