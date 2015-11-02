package bg_backend

import (
	"errors"
	"fmt"
	"math/rand"
	"time"

	"golang.org/x/net/context"

	// TODO: check where to find the "official" package
	"google.golang.org/appengine/user"

	"github.com/GoogleCloudPlatform/go-endpoints/endpoints"
)

// the clientId is the one created with the API manager under Credentials
const clientId = "TODO"

var (
	scopes    = []string{endpoints.EmailScope}
	clientIds = []string{clientId, endpoints.APIExplorerClientID}
	// in case we'll want to use TicTacToe API from an Android app
	audiences = []string{clientId}
)

// Parameter definition

var UserMsg struct {
	Id int64 `json: "id" endpoints:"required"`
}

// API Service definition
type BugOverApi struct {
}

func (bga *BugOverApi) GetUser(c context.Context, req *UserReqMsg, res *UserReqMsg) error {

}
