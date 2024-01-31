const url = new URLSearchParams(window.location.search).get("url");
jwplayer.key = process.env.JWPLAYER_KEY!;

jwplayer("player").setup({
  playlist: [
    {
      title: 'ClipSource',
      file: url!,
      sources: [],
    },
  ],
  cast: {
    appid: "E06DDFCD",
  },
});
