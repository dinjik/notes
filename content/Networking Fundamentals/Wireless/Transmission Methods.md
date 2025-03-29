## DSSS (Direct Sequence Spread Spectrum)

DSSS is one of the foundational methods used in earlier Wi-Fi standards (like 802.11b) to transmit data over radio waves. It spreads the data across a broader frequency band than necessary, reducing interference and improving reliability.

![[Pasted image 20250328142824.png]]

**How It Works:**

- **Spreading Code:** DSSS uses a "spreading code" (a sequence of extra bits, often called a pseudorandom noise sequence) to encode data. This code spreads the signal across a wider frequency range.

- Think of the spreading code as translating your message into a highly redundant, coded format that can tolerate a noisy environment.

- Despreading at the Receiver: The receiver knows the same spreading code and uses it to decode and recover the original data.

## FDM (Frequency Division Multiplexing)

FDM is like dividing a highway into separate lanes, where each lane carries traffic going to a different destination. Each lane (or frequency band) is reserved for one data stream, and the data streams can travel at the same time without interfering with each other.

![[Pasted image 20250328142832.png]]

**How It Works:**

- FDM divides a single channel into non-overlapping smaller subchannels or frequency subsegments so multiple signals can use the same channel simultaneously without interfering.

## Orthogonal Frequency Division Multiplexing (OFDM)

OFDM improves upon FDM by dividing a single channel (e.g., a 20 MHz Wi-Fi channel) into many smaller, tightly-packed subcarriers or subchannels that transmit data in parallel. The subcarriers are designed to be orthogonal, meaning they don’t interfere with each other even though they overlap one another. When one subchannel gets to its peak, the other/overlapping one is at its lowest, which is what avoids interference.

![[Pasted image 20250328142839.png]]

**Why OFDM is Efficient?**

- It packs subchannels tightly together using orthogonality, reducing the need for guard bands between subchannels (unlike traditional FDM).
- OFDM can create more subchannels than FDM because it uses orthogonal subcarriers, which means they don't interfere with each other. This allows for closer spacing of subcarriers, resulting in more subchannels within the same bandwidth.

## Orthogonal Frequency Division Multiple Access (OFDMA)

OFDMA is a multi-user version of OFDM. While OFDM divides a channel into many subchannels for a single user, OFDMA further divides these subchannels among multiple users. This allows for better efficiency and more users to be served simultaneously.

**What OFDMA Does?**

- OFDMA takes the concept of OFDM and allows the subcarriers within a channel to be allocated to multiple devices at the same time.
- This makes it more efficient in environments with many users, such as Wi-Fi 6 networks.

## Quadrature Amplitude Modulation (QAM)

**What QAM Does?**

- QAM is a method of encoding data onto a wave by changing both its amplitude (strength) and phase (timing).
- Higher QAM levels (e.g., 16-QAM, 256-QAM, 1024-QAM) allow more data to be encoded per wave, increasing speed.

**What are common ones?**

- 16-QAM = Each subchannel carries 4 bits.
- 256-QAM = Each  subchannel carries 8 bits.
- 1024-QAM = Each  subchannel carries 10 bits.
- 4096-QAM = Each  subchannel carries 12 bits.