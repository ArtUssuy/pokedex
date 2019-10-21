import axios from "axios";

export const getPokemons = async (offset = 0, limit) => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
	const response = await axios(url);
	return response;
};

export const getTotalPokemons = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=200000`;
	const response = await axios(url);
	return response.data.count;
};

export const checkImage = async index => {
	try {
		const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
		const response = await axios(url);
		if (response) {
			return url;
		}
	} catch (err) {
		console.log(err.response.data);
		return `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA8FBMVEX////w8PAYKDEyQkskND0uPkcyQlPLy8sAAAA6SlMoOUHi4uJAQEDT09Nra2siM0RGX3AbLCwUJCwbLD0iMzMMHCUEDAxCU2MWJzhGVl85UmIPGCA1PkalpaUMHC0nJycpMTkEDBR/f38UHBwEBAz4+P8rPDwWFha3t7dJWlo7TF0AEREhKjKLi4soMEEvL0A8TU0sPU0eHh7i4up/kJAAESJhcHCYmJhOX2dfX19MTEy0vMS6uss2NjYqKiquv9BvgJGEj5pmdIG+vr6qsrIsRVZxf4WEhITl5d1baG9hcYCXoKmDlKVHR0dxcXdic3NINHfkAAADZElEQVR4nO2Ya3OiSBSGpbk0dxS8RhsR3YhEjGY0BDPJjKLjJLuZ/f//Zo/i1CRbtZ+2aKumzvNFCz68D910n0NXKgiCIAiCIAiCIAiCIAiCIMj/h0Z5bgmXy4+y+f3kPo0s4TISUctT4lhR4u2GUYO/gzHxHQXiWyAxn4eM+1xEfU+p12p1URQ7V0Br+8hXIe07Sv3m5qbRkKT9HgQcZ2NwzBe2rij2Q2abw2azO+31NE0iOUeBXNdFqZ9XBCNKsu5o1JVkIlFO4QKNdvcg0LBPYy4YNM3uVFVlnPLz8H4ymTw8dMS39Dzr4JCEjM9LaG1aSguoAg+d7ePP67x2I7qZKcrC87z2HgQ0XeQ17mdYNlMcv9/PsiBQAxgEx+RqQNfjme+3Ekrp4+OPYOVUq89mxC/f+ka029vDebV9j0yzNuk0XnjsPwZQqWxcQm4//7pKzVqtI8m78vNpclguo11HJ+Tzh+u1miaTl9IXgJUNzfl8Mtd1sv14Z1mTNCKVvgXTp0CDpb9Q2uZ5/i2r+DXWBGpAUr7AwHWcxS8By7bPBimRZWKXLWAkvcFg4AZKu3hWtg6fw8IglaAKZeXvggZjh57reKcBEMJntlYLAUODOXhKuPRk7KntFa/bF9Vx1CLR0ogoKkr1dftn6cU4evK9tBB4VZ2kEGCyJIrH4hQv1mUb0KztZ8Vfw/rZgzIi67py7E7jcVL2NIS+n/1ryVs2kUXJ9z1vsVDTsgXYcOg+fKz7f3kzZdp9ex5DQ/RmlZwPtXDouvZ7AVr1lNnoh0Wj1LY5dIQMBO5g1/kDOOWbnqeseqdkg0dNFMKBe3dn558AQbBSEwT8Vekb8TvoWnWJq/+9XC6/fm050971ULVLn/r35FkDDK4BB+hNeefDujs0m3WnoN0dDUPO+fAepGazDfir1Wr6wulb4CO7uisRt2/bSXSZkwk6JyJxL/LsBfkcWgDtcvkCq8sS2Vwsv2KFYxEEdjvjQodTRwGx05lc2wf7wHIW8TwXOWIUAlfV48nQVTVuvW55f6COG9AF7a/2JwNohhyT59kMDEHaG41Gg24QgIcYx/FinHIVOB7RhNlLd3Bi1V6s+nxH4Ah8q+YRdCGZHYBE6c3gf3tYRs74rwMEQRAEQRAEQRAEQRAEQX4P/gGTSliogYunCAAAAABJRU5ErkJggg==`;
	}
};
