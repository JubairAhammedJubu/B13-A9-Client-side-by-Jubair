"use client";

import {useEffect, useState} from "react";
import FacilityCard from "@/components/FacilityCard";
import Loading from "@/components/Loading";

const FacilityPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facility?search=${search}&type=${type}`,
      );

      const data = await res.json();
      setFacilities(data);

      setLoading(false);
    };

    fetchData();
  }, [search, type]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Facilities</h1>

      {/* SEARCH + FILTER */}
      <div className="md:w-3xl mx-auto flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 p-2 rounded-2xl w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-300 p-2 rounded-2xl"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All</option>
          <option value="Football Turf">Football Turf</option>
          <option value="Badminton Court">Badminton Court</option>
          <option value="Swimming Pool">Swimming Pool</option>
          <option value="Tennis Court">Tennis Court</option>
          <option value="Basketball Court">Basketball Court</option>
          <option value="Cricket Ground">Cricket Ground</option>
          <option value="Volleyball Court">Volleyball Court</option>
          <option value="Table Tennis Arena">Table Tennis Arena</option>
          <option value="Gym & Fitness Center">Gym & Fitness Center</option>
          <option value="Hockey Field">Hockey Field</option>
          <option value="Rugby Ground">Rugby Ground</option>
          <option value="Futsal Court">Futsal Court</option>
          <option value="Baseball Field">Baseball Field</option>
          <option value="Skating Rink">Skating Rink</option>
          <option value="Boxing Arena">Boxing Arena</option>
          <option value="Yoga Studio">Yoga Studio</option>
          <option value="Cycling Track">Cycling Track</option>
          <option value="Athletics Track">Athletics Track</option>
          <option value="Martial Arts Dojo">Martial Arts Dojo</option>
          <option value="Esports Arena">Esports Arena</option>
        </select>
      </div>

      {/* LOADING */}
      {loading ? (
        <Loading />
      ) : (
        /* CARDS */
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {facilities.map((facility) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FacilityPage;
