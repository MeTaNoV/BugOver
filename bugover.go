package guestbook

import (
	"time"

	"appengine"
	"appengine/datastore"
)

type Game struct {
	Name string
}

func gameKey(c appengine.Context, owner string) *datastore.Key {
	// The string "default_guestbook" here could be varied to have multiple guestbooks.
	return datastore.NewKey(c, "Game", owner, 0, nil)
}

type Issue struct {
	Title        string
	TimeCreated  time.Time
	TimeModified time.Time
}

func issueKey(c appengine.Context, owner string, gameKey *datastore.Key) *datastore.Key {
	// The string "default_guestbook" here could be varied to have multiple guestbooks.
	return datastore.NewKey(c, "Issue", owner, 0, gameKey)
}

func listIssue(w http.ResponseWriter, r *http.Request) {
	c := appengine.NewContext(r)

	// Get the game key from FormValue or any other mean
	var owner = "myGame"
	gameKey := gameKey(c, owner)

	// The Query type and its methods are used to construct a query.
	q := datastore.NewQuery("Issue").
		Ancestor(gameKey).
		//Filter("__key__ =", gameKey).
		Order("-TimeModified").
		Limit(5)

	// To retrieve the results,
	// you must execute the Query using its GetAll or Run methods.
	var issues []Issue
	_, err := q.GetAll(c, &issues)

	// handle error
	// ...
}
