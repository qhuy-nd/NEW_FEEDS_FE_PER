import { useEffect } from "react";
import BoxContainer from "../../../atoms/box"
import { useApiResult } from "../../../hook/api/useApiResult";
import CardPost from "../../../molecules/card-post";
import { listTweetsCaller } from "../../../services/posts/list-tweets/list-tweets.svc";

const ListTweets = ()=>{
  const {data, isLoading, error, isError} = useApiResult(listTweetsCaller)

  useEffect(()=>{
    listTweetsCaller.execute({
      page: 1,
      limit: 8,
      order: "created_at.desc"
    })
  },[])

  if (isLoading) return <div>Loading...</div>;
  
  if (isError)   return <div>Error: {error}</div>;
  
  if (Array.isArray(data) && data.length === 0) return <div>No tweets available.</div>;

  return (
    <BoxContainer centered variant="ghost" className="gap-4">
        {
          Array.isArray(data) && data.map((post)=>{
            return <CardPost
              key={post.id ?? `${post.userId}-${post.createdAt}`}
              id={post.id ?? ""}
              author={{
                name: post.username ?? "Unknown",
                time: post.createdAt ? new Date(post.createdAt).toLocaleString() : "",
              }}
              content={post.content ?? ""}
              image={post.mediaUrl ?? undefined}
              stats={{
                likes: post.likeCount ?? 0,
                comments: post.replyCount ?? 0,
                shares: 0,
              }}
          />  
        })
      }
      </BoxContainer>
  )
}

export default ListTweets
