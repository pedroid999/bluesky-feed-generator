import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as whatsRpg from './whatsRpg'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [whatsRpg.shortname]: whatsRpg.handler,
}

export default algos
