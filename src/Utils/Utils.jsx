import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Utils = () => {
  const { isLoading,  data : card = [], refetch } = useQuery({
      queryKey: ["selected data"],
      queryFn: async () => {
      const res = await axios("http://localhost:5000/data");
    //   console.log("res from axios", res);
      return res.data;
    },
    });
    
    return [card, refetch, isLoading];
};

export default Utils;
