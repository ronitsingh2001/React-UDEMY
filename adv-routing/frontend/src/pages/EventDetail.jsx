import React, { Suspense } from "react";
import {
  Await,
  Link,
  defer,
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

function EventDetail() {
  const { event, events } = useRouteLoaderData("event-details");

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>
      <Suspense>
        <Await resolve={events}>
          {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetail;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvent(id) {
  const res = await fetch("http://localhost:8080/events/" + id);
  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const resData = await res.json();
    return resData.event;
  }
}

export async function loadSingleEvent({ req, params }) {
  const id = params.eventId;

  return defer({
    event: await loadEvent(id),
    events:  loadEvents(),
  });
}

export async function deleteEvent({ request, params }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!res.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }
  return redirect("/events");
}
