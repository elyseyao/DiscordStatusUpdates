# Discord Status Updates

Love Discord but miss the status notifications from Skype? I made a BetterDiscord plugin that'll notify you whenever someone on your friends list comes online or goes offline.

NOTE: CURRENTLY VERY BUGGY, PLEASE CHECK ISSUES BELOW!

## Prerequisites

What things you need to install the software and how to install them

- [Discord](https://discordapp.com/)
- [BetterDiscord](https://github.com/Jiiks/BetterDiscordApp/releases)

I'm working on Win 10, and am not sure if this will work on other OS's. Let me know if you have issues!

## Installing

This is a plugin for [BetterDiscord](https://github.com/Jiiks/BetterDiscordApp/releases), so install that if you haven't already. Then download this plugin and put `online.plugin.js` in `%appdata%\BetterDiscord\plugins`. Then enable it in your BetterDiscord settings and you're good to go!

## Note

Because of how Discord is structured, my solution isn't exactly elegant. The plugin will rapidly switch to your friends list to parse the list before returning to your original screen. As far as I know, this shouldn't be very noticeable visually, but **may** interrupt you in the middle of typing.

## Issues/Todo

- [ ] Discord throttles refresh rate if it is not focused. As a result, notifications may be delayed. (Currently no fix)
- [ ] Check if switching panels in the background will interrupt
- [x] Will not work if currently in a PM (Fixed)
- [x] Will sometimes not switch back correctly (Fixed)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
