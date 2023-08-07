import * as React from 'react'

type Story = {
  title: string;
  url: string;
  author: string;
  numberOfComments: number;
  points: number;
  objectId: number;
}

type Stories = Story[]

const useStorageState = (key: string, initialState: string): [string, (newValue: string) => void] => {
  const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

  React.useEffect(() => {
    localStorage.setItem(key, value)
  },
    [value, key]
  )

  return [value, setValue]
}

const App = () => {

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walks",
      numberOfComments: 3,
      points: 4,
      objectId: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      numberOfComments: 2,
      points: 5,
      objectId: 1
    },
    {
      title: "Angular",
      url: "https://angular.io/",
      author: "Yakov fain, Anton Moiseev",
      numberOfComments: 6,
      points: 8,
      objectId: 2
    }
  ]

  const [searchTerm, setSearchTerm] = useStorageState('key','Redux');


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  let updatedStories = stories.filter(
    (item) => item.title.toLocaleLowerCase().includes(
      searchTerm.toLocaleLowerCase()
    )
  )

  return (
    <div>
      <h1>Hello world!</h1>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={updatedStories} />
    </div>
  )
}

type SearchProps = {
  searchTerm: string,
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearch }) => (
  <>
    <label htmlFor='search'>Search: </label>
    <input id='search' type='text' value={searchTerm} onChange={onSearch} />
  </>
)

const List: React.FC<{ list: Stories }> = ({ list }) => {
  return (

    <ul>
      {
        list.map(item => {
          return (
            <Item key={item.objectId} {...item} />
          )
        }
        )
      }
    </ul>
  )
}

const Item: React.FC<Story> = ({ title, url, author, numberOfComments, points, objectId }) => {
  return (
    <li key={objectId}>

      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{numberOfComments}</span>
      <span>{points}</span>
    </li>
  )
}



export default App
