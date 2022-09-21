import React, { Component } from "react";
import Title from "./Title";
import { BanquetContext } from "../context";
import Banquet from "./Banquet";
import Loading from "./Loading";
export default class FeaturedBanquet extends Component {
  static contextType = BanquetContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Banquet key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured Banquet" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}