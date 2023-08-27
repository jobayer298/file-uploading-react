import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaRegComment } from "react-icons/fa";
import attachment from "../assets/images/attach-file.png";
import Modal from "./Modal";
import Utils from "../Utils/Utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFileCount from "../Utils/useFileCount";

const SingleCard = ({ d }) => {
  const { file, isLoading, refetch } = useFileCount(d._id);
  const [card] = Utils()
  const [modalOpen, setModalOpen] = useState(false);
  const [singleData, setSingleData] = useState([]);
  
  const closeModal = () => setModalOpen(false);
  // console.log(d);
  const {
    client_photo,
    client_name,
    customer_name,
    customer_photo,
    customer_images,
    date,
    description,
    total_comments,
    total_files,
    total_posts,
    _id,
  } = d;
  //  const {
  //    data: file,
  //    isLoading,
  //    refetch,
  //  } = useQuery(["fileCount", _id], async () => {
  //    const response = await fetch(`http://localhost:5000/fileCount/${_id}`);
  //    if (!response.ok) {
  //      throw new Error("Network response was not ok");
  //    }
  //    const data = await response.json();
  //    return data;
  //  });
   console.log(file);

   const openModal = (id) => {
     setModalOpen(true);
     const getData = card.find((d) => d.id === id);
     setSingleData(getData);
     refetch();
   };
  
  return (
    <div className="mt-3 text-[12px] bg-white p-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={client_photo} className="h-8 w-8 rounded-full" alt="" />
          <h2 className="font-medium">{client_name}</h2>
        </div>
        <div className="flex gap-1 items-center">
          <img src={customer_photo} className="h-8 w-8 rounded-full" alt="" />
          <h2 className="font-medium">{customer_name}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p className="bg-slate-100 px-2 font-medium">1/2</p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center gap-0 mt-3 font-medium justify-between">
        {customer_images?.map((c, i) => (
          <img key={i} className="h-7 w-7 rounded-full" src={c} />
        ))}
        <p className="h-7 w-7 rounded-full bg-slate-100 grid place-items-center">
          {total_posts}+
        </p>
        <p className="flex gap-1 items-center">
          <FaRegComment /> {total_comments}
        </p>
        <div className="flex gap-1 items-center">
          <img
            onClick={() => openModal(_id)}
            src={attachment}
            className="w-4 cursor-pointer"
            alt=""
          />
          <Modal
            id={_id}
            setSingleData={setSingleData}
            singleData={singleData}
            isOpen={modalOpen}
            onClose={closeModal}
          />
          <p>{file?.length}</p>
        </div>
        <p className="flex gap-1 items-center">
          <FaCalendarAlt /> {date}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
