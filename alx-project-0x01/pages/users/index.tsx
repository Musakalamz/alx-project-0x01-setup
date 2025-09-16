import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const posts: UserProps[] = [
  {
    id: 1,
    name: "Musa Ogunsolu",
    username: "Musakalamz",
    email: "musakalamz@example.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Abeokuts",
      zipcode: "1010111",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "musakalamz.org",
    company: {
      name: "MS International",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

const Users: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
