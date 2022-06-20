import fetcher from '@/lib/utils/fetcher'
import useSWR from 'swr'
import Spotify from './Spotify'

const NowPlaying = () => {
  const { data } = useSWR('/api/spotify-now-playing', fetcher)
  return <Spotify data={data} />
}

export default NowPlaying
