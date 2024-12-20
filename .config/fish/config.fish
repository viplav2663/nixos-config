if status is-interactive
    # Commands to run in interactive sessions can go here
end
set -U fish_color_command {color1.strip},
set -U fish_greeting
zoxide init fish | source
starship init fish | source
