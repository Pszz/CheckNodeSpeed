import { Nodes } from './nodes'
import { CheckNodes } from './CheckNodeSpeed'

export const NetCheck = async function () {
  console.log('checking node...')
  const nets = await CheckNodes({
    nodes: Nodes,
    // hasAbort: false,
    params: {
      id: 1,
      jsonrpc: '2.0',
      method: 'sui_getLatestCheckpointSequenceNumber',
      params: [],
    },
  })
  nets.forEach((v) => {
    console.log(`${v.url}:\n${v.status}:\n${v.speed}ms`)
  })
}
