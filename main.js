import Index from './src/index.jo'
import EllJo from '@elljo/runtime'

const ellJo = new EllJo()
ellJo.mount(Index, '#entry')
