import SearchInput from "./components/SearchInput"
import List from "./components/List"
import { useState } from "react"
import useDebounce from "./hooks/useDebounce"

function App() {
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue, 1000)

  return (
    <>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <List searchTerm={debouncedSearchValue} />
    </>
  )
}

export default App
