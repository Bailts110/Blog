import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
export default function PostPage() {
  const params = useParams();
  const [data, loading] = useFetch(params.id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-4xl">{data.title}</h1>
          <p className="my-4">{data.body}</p>
          <h4 className="mb-2">Tags</h4>
          <div className="flex items-center gap-2">
            {data.tags.map((e, i) => {
              return (
                <span className="bg-primary text-white p-1 rounded-md" key={i}>
                  {e}
                </span>


                
               
              );

            })}
      
          </div>
          
        </div>
      )}
    </>
  );
}
