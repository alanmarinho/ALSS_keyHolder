package utils

import (
	"fmt"
)

func Code(code string) string {
	return fmt.Sprintf("Your code is: %s", code)
}

func UserAuthVerify(password string) bool {

	if password == "1234" {
		return true
	} else {
		return false
	} 
}