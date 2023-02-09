import SearchInput from "./components/SearchInput"
import List from "./components/List"
import { useState } from "react"

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <List searchTerm={searchValue} />
    </>
  )
}

export default App
