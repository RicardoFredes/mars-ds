import type { IconLibProps } from "@/libs/icons/icons.types";

const IconArrowForward = ({ height = 24, width = 24 }: IconLibProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.9993H17.86L13.23 18.3589C13.146 18.46 13.0826 18.5767 13.0437 18.7022C13.0047 18.8278 12.9909 18.9598 13.003 19.0908C13.0274 19.3552 13.1558 19.599 13.36 19.7688C13.5642 19.9385 13.8275 20.0201 14.0919 19.9958C14.3564 19.9714 14.6003 19.843 14.77 19.6388L20.77 12.6393C20.8036 12.5916 20.8337 12.5415 20.86 12.4893C20.86 12.4393 20.91 12.4093 20.93 12.3593C20.9753 12.2447 20.9991 12.1227 21 11.9994C20.9991 11.8761 20.9753 11.7541 20.93 11.6394C20.93 11.5894 20.88 11.5594 20.86 11.5094C20.8337 11.4573 20.8036 11.4072 20.77 11.3594L14.77 4.35997C14.676 4.2471 14.5582 4.15633 14.4252 4.09411C14.2921 4.03189 14.1469 3.99976 14 4C13.7663 3.99955 13.5399 4.08091 13.36 4.22998C13.2587 4.31392 13.175 4.41701 13.1137 4.53335C13.0523 4.64969 13.0145 4.77698 13.0025 4.90795C12.9904 5.03891 13.0043 5.17097 13.0433 5.29657C13.0824 5.42216 13.1458 5.53882 13.23 5.63985L17.86 10.9995H4C3.73478 10.9995 3.48043 11.1048 3.29289 11.2923C3.10536 11.4799 3 11.7342 3 11.9994C3 12.2646 3.10536 12.5189 3.29289 12.7064C3.48043 12.8939 3.73478 12.9993 4 12.9993Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconArrowForward;
