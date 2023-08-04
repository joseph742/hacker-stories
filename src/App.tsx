import * as React from 'react'

function App() {
  const list = [
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
    }
  ]

  const titleList = list.map(books => books.title + " ");

  return (
    <div>
      <h1>Hello world!</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <ul>
        {
          list.map(item => {
            return (
              <li key={item.objectId}>

                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.numberOfComments}</span>
                <span>{item.points}</span>
              </li>
            )
          }
          )
        }
      </ul>
    </div>
  )
}

export default App
