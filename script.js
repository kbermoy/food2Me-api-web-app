
async function main() {
    const musics = await fetch('https://api.deezer.com')

    console.log(musics)
}

main()