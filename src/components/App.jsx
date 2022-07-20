import Profile from "./Profile/Profile";
import user from "../components/user.json";
import Statics from "./Static/Static";
import stats from "../components/data.json";
import friends from "../components/friends.json";
import FriendList from "../components/FriendList/FriendList";
import transactions from "../components/transactions.json";
import TransactionHystory from "./Transactions/TransactionHystory";
import Section from "./Sections/sections";
export default function App() {
  return (
    <div>
      <Section title={"Task-1 'Social network profile'"}>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
          quantity={user.stats.quantity}
        />
      </Section>
      <Section title={"Task-2 'Statistics section'"}>
        <Statics stats={stats} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section title={"Task-4 'Transaction history'"}>
        <TransactionHystory items={transactions} />
      </Section>
    </div>
  );
}
