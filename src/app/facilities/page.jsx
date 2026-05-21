"use client";

import {useEffect, useState} from "react";
import FacilityCard from "@/components/FacilityCard";

const FacilityPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facility?search=${search}&type=${type}`,
      );
      const data = await res.json();
      setFacilities(data);
    };

    fetchData();
  }, [search, type]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Facilities</h1>

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="Football Turf">Football Turf</option>
          <option value="Basketball Court">Basketball Court</option>
          <option value="Tennis Court">Tennis Court</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FacilityPage;
