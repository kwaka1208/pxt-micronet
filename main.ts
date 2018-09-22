/**
 * Types of micro network control
 */
enum MN_JoinMethod {
	//% block="Manual"
	MN_Manual,
	//% block="Auto"
	MN_Auto
}

/**
 * microet control package
 */
//% color=#ff0000 weight=100 icon="\uf1d9" block="micro net"
namespace micronet {
	// Declare the host
	//% blockId=host_declare
	//% block="Declare the host micro:bit"
	export function host_declare(): void {
	}
	// Send request
	//% blockId=join_network
	//% block="Join network with name"
	export function join_network(): void {
		// radio.sendString(control.deviceName());
	}
}
