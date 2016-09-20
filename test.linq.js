var list = (() => Linq([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 5, 5, 5]));

(function Any_should_return_any_element_that_matches_the_function() {
    var c = list().Any(c => c > 4);
    console.log(c == true);
})();

(function Average_should_return_the_average_of_all_elements_with_a_function_applied() {
    var c = list().Average(x => x);
    console.log(c);
})();

(function Concat_should_join_two_arrays_together() {
    var c = list().Concat(list());
    console.log(c.length == list().length * 2)
})();

(function Contains_should_return_a_true_if_an_element_is_found() {
    var c = list().Contains(5, ((x, y) => x + 1 == y));
    console.log(c);
})();

(function Count_should_return_the_number_of_elements_matching_the_function() {
    var c = list().Count(x=> x * 2  < 5);
    console.log(c == 3);
})();

(function Distinct_should_return_distinct_elements() {
    var c = list().Distinct();
    console.log(c.length == 6);
})();

(function ElementAt_returns_the_element_at_an_index() {
    var c = list().ElementAt(2);
    console.log(c == 3);
})();

(function ElementAtOrDefault_returns_null_when_out_of_range() {
    var c = list().ElementAtOrDefault(20);
    console.log(c == null);
})();

(function Except_returns_elements_that_dont_match_the_other_array_with_no_comparator() {
    var c = list().Except(list());
    console.log(c.length == 0);
})();

(function Except_returns_elements_that_dont_match_the_other_array_with_a_comparator() {
    var d = list();
    var c = list().Except(d, (x => x + 3));
    console.log(c.length == 8);
})();

(function First_returns_first_element() {
    var c = list().First();
    console.log(c == 1);
})();

(function FirstOrDefault_returns_first_element_that_meets_a_criteria() {
    var c = list().FirstOrDefault(x => x == 6);
    console.log(c == 6);
})();

(function FirstOrDefault_returns_null_when_no_element_meets_the_criteria() {
    var c = list().FirstOrDefault(x => x == 7);
    console.log(c == null);
})();

(function GroupBy_returns_a_dictionary_of_arrays_of_elements_by_type() {
    
})();

(function Intersect_compares_array_to_another_array_and_returns_elements_both_have_by_some_comparator() {
    var other = Linq([1, 2, 3]);
    var l = list();
    var c = l.Intersect(other);
    console.log(c.length == 3);
})();

(function Join_does_some_crazy_shit() {
    var c = list();
})();

(function Last_finds_the_last_occurence_of_an_element_from_a_comparator() {
    var fn = x => x % 2 == 0;
    var c = list().Last(fn);
    console.log(c == 2);
})();

(function LastOrDefault_returns_null_if_it_cant_find_the_last_occurrence_an_element_from_a_comparator() {
    var fn = x => x % 123 == 0;
    var c = list().LastOrDefault(fn);
    console.log(c == null);
})();