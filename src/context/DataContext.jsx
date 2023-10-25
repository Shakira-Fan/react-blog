import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);

    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try {
    //       const response = await api.get('/posts');
    //       setPosts(response.data)
    //     } catch (error) {
    //       if (error.response) {
    //         //Not in the 200 response range
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //       } else {
    //         console.log(`Error:${error.message}`)
    //       }
    //     }
    //   }
    //   fetchPosts();
    // }, [])

    useEffect(() => {
        const filterResults = posts.filter(post =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));
        setSearchResults(filterResults.reverse())
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch, searchResults, fetchError, isLoading,
            posts, setPosts,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;