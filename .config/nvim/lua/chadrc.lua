-- This file needs to have same structure as nvconfig.lua 
-- https://github.com/NvChad/ui/blob/v3.0/lua/nvconfig.lua
-- Please read that file to know all available options :( 

local M = {}
M.nvdash, M.base46 = {}, {}

-- NOTE: To use this, make a copy with `cp example_chadrc.lua chadrc.lua`

--------------------------------------------------------------------

-- To use this file, copy the strucutre of `core/default_config.lua`,
-- examples of setting relative number & changing theme:

-- M.options = {
--    relativenumber = true,
-- }

-- NvChad included plugin options & overrides----M
M.nvdash = {
    load_on_startup = true,
  }

   -- To change the Packer `config` of a plugin that comes with NvChad,
   -- add a table entry below matching the plugin github name
   --              '-' -> '_', remove any '.lua', '.nvim' extensions
   -- this string will be called in a `require`
   --              use "(custom.configs).my_func()" to call a function
   --              use "custom.blankline" to call a file

M.base46 = {
  theme = "gruvbox",
  transparency = true,
}
return M
