export const drawings = Array.from({ length: 40 }, (_, i) => ({
    name: `000-000-${i.toString().padStart(3, '0')}${i === 39 ? '.jpg' : '.png'}`,
    position: [i * 4, 0, 0],
    quaternion: [0, 0, 0, 1]
}));

const poetry = [
    {
        path: "",
        position: [0, 0, 0],
        quaternion: [0, 0, 0, 1]
    }
];
