import useWindowSize from '../lib/utils/useWindowSize'

const Spotify = ({ data }) => {
  const breakpoint = 400
  const windowSize = useWindowSize()

  // Adjustments made for smaller screens
  if (windowSize.width <= breakpoint)
    return (
      <div className="flex items-center px-3 py-2 xl:px-6">
        {data?.songUrl && data?.isPlaying ? (
          <div className="flex flex-col items-center">
            <a
              className="font-medium text-gray-200"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${data.title} - ${data?.artist ?? 'Spotify'}`}
            >
              {data.title}
            </a>
            <span className="mx-2 text-gray-300">{' by '}</span>
            <p className="max-w-max truncate text-gray-300">{data?.artist ?? 'Spotify'}</p>

            <div className="flex">
              <svg
                fill="#1DB954"
                className="h-[22px] w-[22px] flex-shrink-0"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <>
                <div className="ml-2 mr-2 flex h-5 items-end pt-1 pb-0.5">
                  <div className="h-full w-0.5 animate-music-play-1 bg-[#1DB954]"></div>
                  <div className="mx-0.5 h-1/2 w-0.5 animate-music-play-2 bg-[#1DB954]"></div>
                  <div className="h-full w-0.5 animate-music-play-3 bg-[#1DB954]"></div>
                  <div className="mx-0.5 h-1/2 w-0.5 animate-music-play-4 bg-[#1DB954]"></div>
                </div>
              </>
            </div>
          </div>
        ) : (
          <div className="flex">
            <svg
              fill="#1DB954"
              className="h-[22px] w-[22px] flex-shrink-0"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <p className="ml-2 font-medium text-gray-200">Not Playing</p>
          </div>
        )}
      </div>
    )

  return (
    <div className="flex items-center px-3 py-2 xl:px-6">
      <svg
        fill="#1DB954"
        className="h-[22px] w-[22px] flex-shrink-0"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
      <div className="ml-2 inline-flex truncate">
        {data?.songUrl && data?.isPlaying ? (
          <>
            <div className="mr-2 flex h-5 items-end pt-1 pb-0.5">
              <div className="h-full w-0.5 animate-music-play-1 bg-[#1DB954]"></div>
              <div className="mx-0.5 h-1/2 w-0.5 animate-music-play-2 bg-[#1DB954]"></div>
              <div className="h-full w-0.5 animate-music-play-3 bg-[#1DB954]"></div>
              <div className="mx-0.5 h-1/2 w-0.5 animate-music-play-4 bg-[#1DB954]"></div>
            </div>
            <a
              className="font-medium text-gray-200"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${data.title} - ${data?.artist ?? 'Spotify'}`}
            >
              {data.title}
            </a>
          </>
        ) : (
          <p className="font-medium text-gray-200">Not Playing</p>
        )}
        <span className="mx-2 text-gray-300">{' – '}</span>
        <p className="max-w-max truncate text-gray-300">
          {data?.artist && data?.isPlaying ? data.artist : 'Spotify'}
        </p>
      </div>
    </div>
  )
}
export default Spotify
