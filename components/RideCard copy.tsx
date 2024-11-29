import { Text, View } from "react-native";

import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="flex flex-row items-center justify-center mb-3 bg-white rounded-lg shadow-sm shadow-neutral-300">
      <View className="flex flex-col items-start justify-center p-3">
        <View className="flex flex-col items-start justify-center w-full p-3 mt-5 rounded-lg bg-general-500">
          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaBold" numberOfLines={1}>
              {formatDate(ride.created_at)}, {formatTime(ride.ride_time)}
            </Text>
          </View>

          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Driver
            </Text>
            {/* <Text className="text-md font-JakartaBold">
                            {ride.driver.first_name} {ride.driver.last_name}
                        </Text> */}
          </View>

          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Car Seats
            </Text>
            <Text className="text-md font-JakartaBold">
              {ride.driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center justify-between w-full">
            <Text className="text-gray-500 text-md font-JakartaMedium">
              Payment Status
            </Text>
            <Text
              className={`text-md capitalize font-JakartaBold ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
