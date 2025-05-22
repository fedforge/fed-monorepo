import { NativeNavigation } from 'packages/core/navigation/native'
import { Provider } from 'packages/core/provider'

export default function App() {
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
