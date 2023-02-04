import React from 'react';

const GaugeA = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="#000"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M490.407 465.492H350.169l-14.921-26.25a8.084 8.084 0 00-7.029-4.09h-45.811v-57.581c92.149-12.892 163.301-92.217 163.301-187.862C445.709 85.103 360.606 0 256 0S66.291 85.103 66.291 189.709c0 95.645 71.152 174.97 163.301 187.862v57.581h-45.811a8.085 8.085 0 00-7.029 4.09l-14.921 26.25H21.593C9.687 465.492 0 475.18 0 487.085v3.32C0 502.312 9.687 512 21.593 512h371.025a8.082 8.082 0 008.084-8.084 8.082 8.082 0 00-8.084-8.084H21.593a5.432 5.432 0 01-5.425-5.425v-3.32a5.432 5.432 0 015.425-5.425h468.813a5.432 5.432 0 015.425 5.425v3.32a5.432 5.432 0 01-5.425 5.425h-70.48a8.083 8.083 0 00-8.084 8.084 8.083 8.083 0 008.084 8.084h70.48c11.906 0 21.593-9.687 21.593-21.593v-3.32c.001-11.907-9.686-21.595-21.592-21.595zM82.459 189.709C82.459 94.018 160.31 16.168 256 16.168s173.541 77.85 173.541 173.541c0 89.942-68.779 164.115-156.502 172.704a175.743 175.743 0 01-34.079 0c-87.722-8.589-156.501-82.762-156.501-172.704zM266.24 379.143v56.011h-20.48v-56.011l.117.004c1.494.079 2.993.137 4.496.181.184.005.369.016.553.022 1.686.044 3.377.069 5.074.069s3.388-.025 5.074-.069c.184-.005.369-.015.553-.022 1.503-.044 3.002-.102 4.496-.181l.117-.004zm-85.81 86.349l8.055-14.171h135.031l8.055 14.171H180.43z"></path>
      <path d="M383.137 282.366c2.633-3.606 1.848-8.663-1.758-11.296a8.084 8.084 0 00-11.296 1.758c-26.577 36.37-69.225 58.086-114.082 58.086-75.491 0-137.335-59.549-141.027-134.141h21.979a8.084 8.084 0 008.084-8.084c0-3.539-2.276-6.539-5.442-7.634 1.777-26.632 12.285-50.642 28.688-69.284a8.06 8.06 0 009.255-1.546c2.496-2.496 3.011-6.218 1.558-9.228 18.747-16.364 42.828-26.757 69.381-28.419a8.079 8.079 0 007.525 5.146c3.423 0 6.342-2.13 7.522-5.135 26.239 1.719 50.327 12.353 69.162 28.891a8.084 8.084 0 0010.559 10.509c16.609 18.736 27.357 42.76 29.161 69.066-3.163 1.097-5.437 4.095-5.437 7.632a8.083 8.083 0 008.084 8.084h21.973c-.913 18.707-5.453 36.725-13.549 53.651a8.085 8.085 0 0014.585 6.977c10.16-21.242 15.313-44.017 15.313-67.691 0-86.776-70.597-157.373-157.373-157.373S98.627 102.934 98.627 189.709 169.224 347.082 256 347.082c49.999 0 97.527-24.192 127.137-64.716zm-22.27-187.11c20.671 22.926 33.943 52.64 36.035 85.349h-8.324c-1.86-29.701-13.512-57.573-33.289-79.773l5.578-5.576zm-96.783-46.514c32.599 1.85 62.271 14.807 85.288 35.14l-5.536 5.536c-22.29-19.705-50.156-31.221-79.752-33v-7.676zm-16.168 0v7.677c-29.589 1.78-57.461 13.298-79.751 33.002l-5.538-5.538c23.017-20.332 52.689-33.291 85.289-35.141zm-96.783 46.514l5.577 5.577c-19.766 22.193-31.427 50.068-33.289 79.773h-8.323c2.092-32.709 15.364-62.423 36.035-85.35z"></path>
      <path d="M316.036 129.606a8.086 8.086 0 00-10.125-.08l-67.249 53.143a26.891 26.891 0 00-6.898 8.133c-.047.087-.094.175-.139.263l-.327.646c-4.251 8.432-3.834 18.276 1.118 26.333l.102.168c.112.179.227.355.345.529l.086.128a18.888 18.888 0 00.623.897 28.134 28.134 0 00.777 1.019c.237.294.477.583.723.863l.019.022c.055.065.11.127.165.19.235.26.47.516.703.759l.216.22c.222.226.446.447.675.664l.143.134.244.223a27.268 27.268 0 00.742.652c.141.117.284.236.429.352l.378.305.106.082c.191.146.383.29.637.475l.334.239c.262.185.532.366.806.547l.098.064c.037.024.16.105.197.127.3.19.607.375.99.596l.12.068c.315.181.638.354.961.521.114.061.227.12.342.176.275.137.555.267.834.397l.113.052.246.111c.234.105.471.201.803.334.181.075.363.149.53.212.105.04.21.078.318.114a27.062 27.062 0 009.218 1.614 27.093 27.093 0 0016.729-5.813l.564-.444a8.07 8.07 0 00.247-.203 26.885 26.885 0 006.583-8.394l38.581-76.534a8.087 8.087 0 00-2.107-9.904zm-50.911 79.156a10.817 10.817 0 01-2.538 3.285l-.433.342a10.721 10.721 0 01-6.714 2.338c-1.272 0-2.521-.218-3.714-.649-.046-.017-.093-.035-.14-.051l-.236-.097a5.112 5.112 0 00-.111-.044l-.261-.112c-.128-.059-.257-.116-.383-.179-.036-.019-.072-.039-.11-.057-.122-.063-.245-.125-.363-.193l-.093-.053a12.575 12.575 0 01-.388-.232l-.123-.08c-.11-.071-.218-.142-.26-.171l-.686-.517a2.81 2.81 0 00-.089-.072l-.511-.451a11.589 11.589 0 01-.37-.369 10.74 10.74 0 01-.677-.777l-.051-.065c-.082-.104-.158-.21-.184-.244l-.117-.162c-.015-.021-.029-.042-.049-.068l-.245-.366-.039-.059-.045-.073c-1.996-3.245-2.168-7.205-.46-10.589l.247-.492a10.817 10.817 0 012.711-3.152l38.551-30.465-22.119 43.874zM300.936 260.155a8.083 8.083 0 00-8.084-8.084h-73.297a8.084 8.084 0 00-8.084 8.084 8.084 8.084 0 008.084 8.084h73.297a8.082 8.082 0 008.084-8.084zM237.676 280.301a8.082 8.082 0 00-8.084 8.084 8.082 8.082 0 008.084 8.084h36.648a8.083 8.083 0 008.084-8.084 8.083 8.083 0 00-8.084-8.084h-36.648z"></path>
    </svg>
  );
};

export default GaugeA;