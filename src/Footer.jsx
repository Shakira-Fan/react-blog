import { useStoreState } from "easy-peasy";

export const Footer = () => {
  const postCount = useStoreState((state)=>state.postCount);  
  return (
    <footer className="Footer">
      <p>{postCount} Blog Posts</p>
    </footer>
  )
}
