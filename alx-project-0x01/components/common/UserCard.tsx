import { UserProps } from "@/interfaces";

// interface UserCardProps {
//   user: UserProps;
// }

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">@{username}</p>

      {/* Contact Info */}
      <div className="mt-3 text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Address */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-600">Address</h3>
        <p className="text-gray-500 text-sm">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
      </div>

      {/* Company */}
      <div className="mt-3">
        <h3 className="text-sm font-semibold text-gray-600">Company</h3>
        <p className="text-gray-700">{company.name}</p>
        <p className="text-gray-500 italic text-sm">“{company.catchPhrase}”</p>
      </div>
    </div>
  );
};

export default UserCard;
