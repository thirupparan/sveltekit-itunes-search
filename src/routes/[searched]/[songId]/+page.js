
export async function load({ params }) {
   var songId = params.songId;
   const itunesSearched = await fetch(
    `https://itunes.apple.com/search?term=${songId}&entity=song`
  );
  var res = await itunesSearched.json();
  var songResults = res.results[0];
  return {songResults:songResults}
}

